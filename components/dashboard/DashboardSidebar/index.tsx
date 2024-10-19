'use client';

import Icons from "@/components/common/Icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { DashboardSidebarProps } from "@/types/components";
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { PanelLeftClose, PanelRightClose } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import UpgradeCard from "../UpgradeCard";

const DashboardSidebar = ({ links }: DashboardSidebarProps) => {
    const path = usePathname();

    const { isTablet } = useMediaQuery();
    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(!isTablet);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    useEffect(() => {
        setIsSidebarExpanded(!isTablet);
    }, [isTablet]);

    return (
        <div className="sticky top-0 h-full">
            <ScrollArea className="h-full overflow-y-auto border-r">
                <aside
                    className={cn(
                        isSidebarExpanded ? "w-[220px] xl:w-[260px]" : "w-[68px]",
                        "hidden h-screen md:block",
                    )}
                >
                    <div className="flex h-full max-h-screen flex-1 flex-col gap-2">
                        <div className="flex h-14 items-center p-4 lg:h-[60px]">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-auto size-9 lg:size-8"
                                onClick={toggleSidebar}
                            >
                                {isSidebarExpanded ? (
                                    <PanelLeftClose
                                        size={18}
                                        className="stroke-muted-foreground"
                                    />
                                ) : (
                                    <PanelRightClose
                                        size={18}
                                        className="stroke-muted-foreground"
                                    />
                                )}
                                <span className="sr-only">Toggle Sidebar</span>
                            </Button>
                        </div>

                        <nav className="flex flex-1 flex-col gap-8 px-4 pt-4">
                            {links.map((section) => (
                                <section
                                    key={section.title}
                                    className="flex flex-col gap-0.5"
                                >
                                    {isSidebarExpanded ? (
                                        <p className="text-xs text-muted-foreground">
                                            {section.title}
                                        </p>
                                    ) : (
                                        <div className="h-4" />
                                    )}
                                    {section.items.map((item) => {
                                        const Icon = Icons[item.icon || "arrowRight"];
                                        return (
                                            item.href && (
                                                <Fragment key={`link-fragment-${item.title}`}>
                                                    {isSidebarExpanded ? (
                                                        <Link
                                                            key={`link-${item.title}`}
                                                            href={item.disabled ? "#" : item.href}
                                                            className={cn(
                                                                "flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-muted",
                                                                path === item.href
                                                                    ? "bg-muted"
                                                                    : "text-muted-foreground hover:text-accent-foreground",
                                                                item.disabled &&
                                                                "cursor-not-allowed opacity-80 hover:bg-transparent hover:text-muted-foreground",
                                                            )}
                                                        >
                                                            <Icon className="size-5" />
                                                            {item.title}
                                                            {item.badge && (
                                                                <Badge className="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full">
                                                                    {item.badge}
                                                                </Badge>
                                                            )}
                                                        </Link>
                                                    ) : (
                                                        <Tooltip key={`tooltip-${item.title}`}>
                                                            <TooltipTrigger asChild>
                                                                <Link
                                                                    key={`link-tooltip-${item.title}`}
                                                                    href={item.disabled ? "#" : item.href}
                                                                    className={cn(
                                                                        "flex items-center gap-3 rounded-md py-2 text-sm font-medium hover:bg-muted",
                                                                        path === item.href
                                                                            ? "bg-muted"
                                                                            : "text-muted-foreground hover:text-accent-foreground",
                                                                        item.disabled &&
                                                                        "cursor-not-allowed opacity-80 hover:bg-transparent hover:text-muted-foreground",
                                                                    )}
                                                                >
                                                                    <span className="flex size-full items-center justify-center">
                                                                        <Icon className="size-5" />
                                                                    </span>
                                                                </Link>
                                                            </TooltipTrigger>
                                                            <TooltipContent side="right">
                                                                {item.title}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    )}
                                                </Fragment>
                                            )
                                        );
                                    })}
                                </section>
                            ))}
                        </nav>

                        <div className="mt-auto xl:p-4">
                            {isSidebarExpanded ? <UpgradeCard /> : null}
                        </div>
                    </div>
                </aside>
            </ScrollArea>
        </div>
    );
};

export default DashboardSidebar;