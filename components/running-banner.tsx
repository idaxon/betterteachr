"use strict";
import { Zap, Crown } from "lucide-react";

export function RunningBanner() {
    return (
        <div className="fixed top-0 left-0 right-0 h-6 bg-red-600 text-white z-[60] flex items-center overflow-hidden">
            <div className="whitespace-nowrap animate-marquee flex items-center">
                <span className="mx-4 text-xs font-bold uppercase tracking-wider flex items-center">
                    <Zap className="h-3 w-3 mr-2 fill-yellow-400 text-yellow-400" />
                    50% OFF on LinkedIn Makeover & CV/Resume Making - CLAIM NOW!
                </span>
                <span className="mx-4 text-xs font-bold uppercase tracking-wider flex items-center opacity-75">
                    Limited Time Offer
                </span>
                <span className="mx-4 text-xs font-bold uppercase tracking-wider flex items-center">
                    <Crown className="h-3 w-3 mr-2 fill-yellow-400 text-yellow-400" />
                    BMU Students Special
                </span>
                {/* Duplicate content for seamless loop */}
                <span className="mx-4 text-xs font-bold uppercase tracking-wider flex items-center">
                    <Zap className="h-3 w-3 mr-2 fill-yellow-400 text-yellow-400" />
                    50% OFF on LinkedIn Makeover & CV/Resume Making - CLAIM NOW!
                </span>
                <span className="mx-4 text-xs font-bold uppercase tracking-wider flex items-center opacity-75">
                    Limited Time Offer
                </span>
                <span className="mx-4 text-xs font-bold uppercase tracking-wider flex items-center">
                    <Crown className="h-3 w-3 mr-2 fill-yellow-400 text-yellow-400" />
                    BMU Students Special
                </span>
                <span className="mx-4 text-xs font-bold uppercase tracking-wider flex items-center">
                    <Zap className="h-3 w-3 mr-2 fill-yellow-400 text-yellow-400" />
                    50% OFF on LinkedIn Makeover & CV/Resume Making - CLAIM NOW!
                </span>
                <span className="mx-4 text-xs font-bold uppercase tracking-wider flex items-center opacity-75">
                    Limited Time Offer
                </span>
                <span className="mx-4 text-xs font-bold uppercase tracking-wider flex items-center">
                    <Crown className="h-3 w-3 mr-2 fill-yellow-400 text-yellow-400" />
                    BMU Students Special
                </span>
            </div>
        </div>
    );
}
