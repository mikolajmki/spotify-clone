"use client";

import Modal from "./Modal";
import Input from "./Input";
import useUploadModal from "@/hooks/useUploadModal";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

const UploadModal = () => {

    const uploadModal = useUploadModal();

    const [isLoading, setIsLoading] = useState();

    const form = useForm<FieldValues>({
        defaultValues: {
            author: "",
            title: "",
            song: null,
            image: null
        }
    });

    const onChange = (open: boolean) => {
        if (!open) {
            form.reset();
            uploadModal.onClose();
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {

    }

    return (
        <Modal title="Add a song" description="Upload an mp3 file" isOpen={uploadModal.isOpen} onChange={onChange}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Input id="title" disabled={isLoading} placeholder="Song title" { ...form.register("title", { required: true }) }/>
            </form>
        </Modal>
    )
};

export default UploadModal;