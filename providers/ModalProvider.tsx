"use client";

import Modal from "@/components/Modal";

import { useState, useEffect } from "react";

const ModalProvier = () => {
    
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Modal title="Test Modal" description="Test Description" isOpen onChange={() => {}}>
                Test Children
            </Modal>
        </>
    )
};

export default ModalProvier;