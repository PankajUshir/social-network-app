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
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
    })
    const router = useRouter()

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
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Register to your account</CardTitle>
                    <CardDescription>
                        Enter your information register your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="full_name">Full Name</Label>
                                <Input
                                    id="full_name"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={(e) => {
                                        setRegisterData({
                                            ...registerData,
                                            full_name: e.target.value,
                                        })
                                    }}
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="example@email.com"
                                    onChange={(e) => {
                                        setRegisterData({
                                            ...registerData,
                                            email: e.target.value,
                                        })
                                    }}
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    onChange={(e) => {
                                        setRegisterData({
                                            ...registerData,
                                            password: e.target.value,
                                        })
                                    }}
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
                                    onChange={(e) => {
                                        setRegisterData({
                                            ...registerData,
                                            confirm_password: e.target.value,
                                        })
                                    }}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button
                                    type="submit"
                                    className="w-full"
                                    onClick={handleSubmit}
                                >
                                    Register
                                </Button>
                            </div>
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
