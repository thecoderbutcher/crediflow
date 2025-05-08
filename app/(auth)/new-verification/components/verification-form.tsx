'use client'
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "../action/new-verification";
import { BeatLoader } from "react-spinners";
import { FormSuccess } from "../../components/form-success";
import { FormError } from "../../components/form-error";


const VerificationForm = () => {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const onSubmit = useCallback(() => {
        if(success || error) return;

        if(!token) {
            setError('Token no válido');
            return;
        }
        newVerification(token)
            .then((data) => {
                setSuccess(data?.success);
                setError(data?.error);
            })
            .catch(() => {
                setError("Algo salió mal!");
            })
    }, [token, success, error]);

    useEffect(() => { onSubmit(); }, [onSubmit]);

    return (
        <div className="flex w-full justify-center items-center">
            {!success && !error && (<BeatLoader />)}
            <FormSuccess message={success}/>
            {!success && error && (<FormError message={error}/>)}
        </div>
    )
}

export default VerificationForm