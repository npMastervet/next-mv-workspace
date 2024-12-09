import React from 'react'
import { AlignLeft } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import Link from 'next/link';
import { link } from '@/utils/link';
import SignOutLink from './SignOutLink';
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs';

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'><button>Login</button></SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode='modal'><button>Register</button></SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {
            link.map((item, index) => {
              return <DropdownMenuItem key={index}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            })
          }
          <SignOutLink />
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownListMenu