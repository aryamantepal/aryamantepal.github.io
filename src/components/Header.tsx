import { ProfileData, profileData } from "@/data/profile";
import React from "react";

export default function Header() {
    return (
        <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-1">{profileData.name}</h1>
                    <p className="text-sm text-gray-600 mb-6">({profileData.pronunciation})</p>
                    {profileData.bio.map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-800">
                            {paragraph}
                        </p>
                    ))}
                    <div className="flex flex-wrap gap-4 mt-6 text-sm">
                        {profileData.links.map((link, index) => (
                            <React.Fragment key={index}>
                                <a href={link.url} className="text-blue-600 hover:underline">
                                    {link.name}
                                </a>
                                {index < profileData.links.length - 1 && (
                                    <span className="text-gray-400">/</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                        Email: {profileData.email}
                    </p>
                    <div className="flex flex-wrap gap-6 mt-6 items-center">
                        {profileData.institutions.map((institution, index) => (
                            <a
                                key={index}
                                href={institution.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:underline"
                            >
                                {institution.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="w-48 h-48 flex-shrink-0">
                    {profileData.profileImage}
                </div>
            </div>
        </div>
    );
}