import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroScene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group
    const spineGroup = new THREE.Group();
    scene.add(spineGroup);

    // 1. Frosted Glass & Translucent White Vertebral Cylinders
    const vertebraeCount = 7;
    const vertebraeMeshes: THREE.Mesh[] = [];
    const discSpacing = 1.6;
    const startY = ((vertebraeCount - 1) * discSpacing) / 2;

    for (let i = 0; i < vertebraeCount; i++) {
      const y = startY - i * discSpacing;
      
      // Frosted Glass Vertebral Body
      const vertebraGeo = new THREE.CylinderGeometry(
        1.45 - Math.abs(i - 3) * 0.08,
        1.55 - Math.abs(i - 3) * 0.08,
        0.75,
        36
      );
      
      const vertebraMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(i === 3 ? '#E7F2F5' : '#FFFFFF'),
        metalness: 0.05,
        roughness: 0.15,
        transmission: 0.85, // Frosted glass translucency
        thickness: 1.4,
        transparent: true,
        opacity: 0.75,
        ior: 1.45,
      });

      const vertebra = new THREE.Mesh(vertebraGeo, vertebraMat);
      vertebra.position.set(0, y, 0);
      vertebra.rotation.y = Math.PI / 4;
      spineGroup.add(vertebra);
      vertebraeMeshes.push(vertebra);

      // Fine Medical Teal / Champagne Accent Ring
      const ringGeo = new THREE.TorusGeometry(1.56 - Math.abs(i - 3) * 0.08, 0.025, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(i === 3 ? '#3D9C98' : '#7BAFC4'),
        transparent: true,
        opacity: i === 3 ? 0.85 : 0.4
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      vertebra.add(ring);

      // Delicate Branching Pathways (Pale blue & soft teal)
      const leftBranchPoints = [
        new THREE.Vector3(0, y, 0),
        new THREE.Vector3(-1.7, y - 0.18, 0.3),
        new THREE.Vector3(-3.0, y - 0.55, 0.7),
        new THREE.Vector3(-4.4, y - 1.2, 1.0)
      ];
      const rightBranchPoints = [
        new THREE.Vector3(0, y, 0),
        new THREE.Vector3(1.7, y - 0.18, 0.3),
        new THREE.Vector3(3.0, y - 0.55, 0.7),
        new THREE.Vector3(4.4, y - 1.2, 1.0)
      ];

      const leftCurve = new THREE.CatmullRomCurve3(leftBranchPoints);
      const rightCurve = new THREE.CatmullRomCurve3(rightBranchPoints);

      const tubeGeoL = new THREE.TubeGeometry(leftCurve, 24, 0.035, 8, false);
      const tubeGeoR = new THREE.TubeGeometry(rightCurve, 24, 0.035, 8, false);
      
      const nerveMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#3D9C98'),
        transparent: true,
        opacity: 0.32
      });

      const tubeL = new THREE.Mesh(tubeGeoL, nerveMat);
      const tubeR = new THREE.Mesh(tubeGeoR, nerveMat);
      spineGroup.add(tubeL);
      spineGroup.add(tubeR);
    }

    // 2. Translucent Soft Teal Spinal Core Cord
    const cordCurvePoints = [
      new THREE.Vector3(0, startY + 2.5, 0),
      new THREE.Vector3(0.15, startY * 0.5, 0.08),
      new THREE.Vector3(-0.15, 0, -0.08),
      new THREE.Vector3(0.1, -startY * 0.5, 0.08),
      new THREE.Vector3(0, -startY - 2.5, 0)
    ];
    const cordCurve = new THREE.CatmullRomCurve3(cordCurvePoints);
    const cordGeo = new THREE.TubeGeometry(cordCurve, 40, 0.32, 16, false);
    const cordMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#7BAFC4'),
      emissive: new THREE.Color('#3D9C98'),
      emissiveIntensity: 0.25,
      roughness: 0.1,
      metalness: 0.05,
      transmission: 0.65,
      transparent: true,
      opacity: 0.65
    });
    const cordMesh = new THREE.Mesh(cordGeo, cordMat);
    spineGroup.add(cordMesh);

    // 3. Delicate Floating Champagne & Pale Blue Synaptic Particles
    const particleCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      particleSpeeds[i] = 0.004 + Math.random() * 0.007;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color('#3D9C98'),
      size: 0.12,
      transparent: true,
      opacity: 0.45
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Bright Studio-Style Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.4);
    scene.add(ambientLight);

    const studioKeyLight = new THREE.DirectionalLight(0xFFFFFF, 2.2);
    studioKeyLight.position.set(6, 8, 12);
    scene.add(studioKeyLight);

    const softTealRimLight = new THREE.DirectionalLight(0x7BAFC4, 1.6);
    softTealRimLight.position.set(-6, -4, -6);
    scene.add(softTealRimLight);

    const champagneHighlight = new THREE.PointLight(0xD8C6A0, 1.2, 12);
    champagneHighlight.position.set(0, 0, 4);
    scene.add(champagneHighlight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        targetRotationY = mouseX * 0.3 + Math.sin(elapsedTime * 0.35) * 0.08;
        targetRotationX = -mouseY * 0.25 + Math.cos(elapsedTime * 0.25) * 0.04;

        // Smooth damping
        spineGroup.rotation.y += (targetRotationY - spineGroup.rotation.y) * 0.05;
        spineGroup.rotation.x += (targetRotationX - spineGroup.rotation.x) * 0.05;

        // Subtle gentle breathing movement
        vertebraeMeshes.forEach((mesh, idx) => {
          mesh.position.x = Math.sin(elapsedTime * 0.9 + idx * 0.5) * 0.05;
        });

        // Drift particles slowly
        const pos = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3 + 1] += particleSpeeds[i];
          if (pos[i * 3 + 1] > 7) {
            pos[i * 3 + 1] = -7;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      scene.clear();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[460px] flex items-center justify-center pointer-events-none select-none">
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto" />
      
      {/* Light Precision Medical HUD Markers */}
      <div className="absolute top-6 right-6 text-right pointer-events-none hidden md:block">
        <div className="font-mono text-[11px] text-[#3D9C98] tracking-wider flex items-center justify-end gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98] animate-pulse" />
          IMAGE-GUIDED PRECISION
        </div>
        <div className="text-[10px] text-[#5E6872] font-mono mt-0.5">AXIAL RESOLUTION: 0.1mm</div>
      </div>

      <div className="absolute bottom-6 left-6 pointer-events-none hidden md:block">
        <div className="text-[11px] font-mono text-[#5E6872]">
          <span className="text-[#3D9C98] font-semibold">L3–L5 / S1</span> NEURAL ARCHITECTURE
        </div>
        <div className="text-[10px] text-[#5E6872]/80 font-mono">INTERVENTIONAL TARGETING</div>
      </div>
    </div>
  );
};
