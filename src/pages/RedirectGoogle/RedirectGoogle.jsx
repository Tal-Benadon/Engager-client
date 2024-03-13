import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function RedirectGoogle() {
    let nav = useNavigate()
    const { token } = useParams()
    localStorage.token = token
    useEffect(() => nav('../../'), [])

    return (
        <div></div>
    )
}
