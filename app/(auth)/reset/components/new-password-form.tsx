
const NewPasswordForm = () => { 
    return (
        <form className="flex flex-col gap-4" >
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Nueva contraseña</label>
                <input type="password" name="password" id="password" placeholder="********" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="********"/>
            </div>
            <div className="flex flex-col gap-2">
                <button className="w-full bg-primary text-white py-2 rounded-md">Cambiar contraseña</button>
            </div>
        
        </form>
  )
}

export default NewPasswordForm