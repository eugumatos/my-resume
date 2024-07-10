import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const SpatialBackground = () => {
  const mountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    mountRef.current?.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.005, 24, 24);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 300; i++) {
      const star = new THREE.Mesh(geometry, material);
      star.position.x = Math.random() * 10 - 5;
      star.position.y = Math.random() * 10 - 5;
      star.position.z = Math.random() * 10 - 5;
      scene.add(star);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.x += 0.001;
      scene.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="fixed -z-10" ref={mountRef} />;
};
