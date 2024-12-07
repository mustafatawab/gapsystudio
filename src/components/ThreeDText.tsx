import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const ThreeDText = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // Load font and create text
    const fontLoader = new FontLoader();
    fontLoader.load('/fonts/Roboto_Regular.json', (font) => {
      const textGeometry = new TextGeometry('Hello Three.js!', {
        font: font,
        size: 1, // Text size
        height: 0.5, // Text depth
        curveSegments: 12, // Smooth curves
        bevelEnabled: true, // Add bevel
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelSegments: 5,
      });

      const textMaterial = new THREE.MeshStandardMaterial({ color: 0x0077ff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      // Center the text
      textGeometry.computeBoundingBox();
      const centerOffset =
        (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x) / 2;
      textMesh.position.set(-centerOffset, 0, 0);

      scene.add(textMesh);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeDText;
