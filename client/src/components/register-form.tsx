'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    const [registerData, setRegisterData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
    })
    const router = useRouter()

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target
        setRegisterData({
            ...registerData,
            [name]: value,
        })
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (registerData.password !== registerData.confirm_password) {
            alert('Passwords do not match!')
            return
        }
        console.log('registerData : ', event)
        router.push('/')
    }
    return (
        <div className={cn('flex items-center flex-col gap-6', className)}>
            <Card className="md:w-2xl">
                <CardHeader>
                    <CardTitle>Register to your account</CardTitle>
                    <CardDescription>
                        Enter your information register your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="first_name">First Name</Label>
                                <Input
                                    id="first_name"
                                    type="text"
                                    name="first_name"
                                    value={registerData.first_name}
                                    placeholder="First Name"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input
                                    id="last_name"
                                    type="text"
                                    name="last_name"
                                    value={registerData.last_name}
                                    placeholder="Last Name"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={registerData.email}
                                    placeholder="example@email.com"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={registerData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="confirm_password">
                                    Confirm Password
                                </Label>
                                <Input
                                    id="confirm_password"
                                    type="password"
                                    name="confirm_password"
                                    value={registerData.confirm_password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-center ">
                            <Button type="submit" className="w-3xs">
                                Register
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{' '}
                            <a
                                href="/login"
                                className="underline underline-offset-4"
                            >
                                Login
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
