import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function SlideNavigationMenuComponent({isOpen, onOpen, onClose}: {isOpen: boolean; onOpen: () => void; onClose: () => void;}): React.JSX.Element {
    return(
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Link href='/history'>Save</Link>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}