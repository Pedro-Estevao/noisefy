"use client";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer } from "vaul";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ModalProps } from "@/types/components";

const Modal = ({
    children,
    className,
    showModal,
    setShowModal,
    onClose,
    desktopOnly,
    preventDefaultClose,
}: ModalProps) => {
    const closeModal = ({ dragged }: { dragged?: boolean } = {}) => {
        if (preventDefaultClose && !dragged) {
            return;
        }

        onClose && onClose();

        if (setShowModal) {
            setShowModal(false);
        }
    };
    const { isMobile } = useMediaQuery();

    if (isMobile && !desktopOnly) {
        return (
            <Drawer.Root
                open={setShowModal ? showModal : true}
                onOpenChange={(open) => {
                    if (!open) {
                        closeModal({ dragged: true });
                    }
                }}
            >
                <Drawer.Overlay className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" />
                <Drawer.Portal>
                    <Drawer.Content
                        className={cn(
                            "fixed inset-x-0 bottom-0 z-50 mt-24 overflow-hidden rounded-t-[10px] border bg-background",
                            className,
                        )}
                    >
                        <div className="sticky top-0 z-20 flex w-full items-center justify-center bg-inherit">
                            <div className="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
                        </div>
                        {children}
                    </Drawer.Content>
                    <Drawer.Overlay />
                </Drawer.Portal>
            </Drawer.Root>
        );
    }
    return (
        <Dialog
            open={setShowModal ? showModal : true}
            onOpenChange={(open) => {
                if (!open) {
                    closeModal();
                }
            }}
        >
            <DialogContent
                onOpenAutoFocus={(e) => e.preventDefault()}
                onCloseAutoFocus={(e) => e.preventDefault()}
                className={cn(
                    "overflow-hidden p-0 md:max-w-md md:rounded-2xl md:border",
                    className,
                )}
            >
                {children}
            </DialogContent>
        </Dialog>
    );
};

export { Modal };