import React, {useCallback, useEffect, useState} from "react";
import InputText from "../../../../components/inputs/input-text/input-text-component";
import Button from "../../../../components/buttons/button/button.component";
import { ErrorMessage } from "./form.types";
import * as yup from 'yup'
import { ErrorDescription } from "./form.styled";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../../store/store/user/user.slice";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { HomePath } from "../../../home/home.types";
import { isAuthenticated } from "../../../../store/store/user/user.selectors";


const errorInitial = ''

export default function Form() {
    const [data, setData] = useState({ email: '', password: '' })
    const [error, setError] = useState(errorInitial)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const isUserAuthenticated = useSelector(isAuthenticated)

    useEffect(
        ()=>{
        if (isUserAuthenticated){
            const to = location.state?.from?.pathname || HomePath
            navigate(to)
        }
    },
        [isUserAuthenticated]
    )


    const resetError = useCallback(
        () => setError(errorInitial),
        []
    )

    const handleChange = useCallback(
        (event: any) => setData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        })),
        [setData]
    )

    const validation = useCallback(
        async () => {
            const schema = yup.object().shape({
                email: yup.string().required(ErrorMessage.Required).email(ErrorMessage.EmailBadFormat),
                password: yup.string().required(ErrorMessage.Required),
            })

            try {
                await schema.validate(data)
                resetError()

                return true
            } catch (error) {
                // @ts-ignore
                setError(error.errors[0])

                return false
            }

        },
        [data, setError]
    )

    const onSubmit = useCallback(
        async () => {
            if(await validation()) {
                dispatch(userActions.login(data))
            }
        },
        [validation, data]
    )

    return (
        <>
            <InputText type='text' placeholder={'E-mail'} name={'email'} onChange={handleChange}/>
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={handleChange}/>
            <ErrorDescription>{error}</ErrorDescription>
            <Button primary onClick={onSubmit}>Entrar</Button>
        </>
    )
}