"use client";

import AuthModal from "@/components/AuthModal";
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
            <AuthModal/>
        </>
    )
};

export default ModalProvier;