'use client'
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "../action/newverification";


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
                setError(data?.error);
                setSuccess(data?.success);
            })
            .catch(() => {
                setError("Algo salió mal!");
            })
    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <div className="flex w-full justify-center items-center">
            {!success && !error && (
                <div className="flex flex-col gap-2">
                    <p>Verificando...</p>
                </div>
            )}
            {success && (
                <div className="flex flex-col gap-2">
                    <p>{success}</p>
                </div>
            )}
            {error && (
                <div className="flex flex-col gap-2">
                    <p>{error}</p>
                </div>
            )}
        </div>
    )
}

export default VerificationForm