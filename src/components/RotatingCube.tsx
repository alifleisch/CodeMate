import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Mesh } from 'three';

const RotatingCube: React.FC = () => {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
                color="#858aed"
                metalness={0.5}
                roughness={0.5}
            />
        </mesh>
    );
};

export default RotatingCube;