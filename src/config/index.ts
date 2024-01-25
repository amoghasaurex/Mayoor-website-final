export const PRODUCT_CATEGORIES = [
    {
        label: "Digital Etiquette",
        value: "digital_etiquette" as const,
        featured: [
            {
                name: 'Digital Citizenship',
                href: "#",
                imageSrc: "/nav/digital_etiquette/citizen.jpg",
            },
            {
                name: 'Creative Commons',
                href: "#",
                imageSrc: "/nav/digital_etiquette/cc.jpg",
            },
            {
                name: 'Copyright',
                href: "#",
                imageSrc: "/nav/digital_etiquette/copyright-image.jpg",
            }
        ]
    },
    {
        label: "Google Apps",
        value: "google_docs" as const,
        featured: [
            {
                name: 'Google Sheets',
                href: "/sheets",
                imageSrc: "/nav/google_apps/sheets.jpg",
            },
            {
                name: 'Google Classroom',
                href: "/classroom",
                imageSrc: "/nav/google_apps/classroom.webp",
            },
            {
                name: 'Google Forms',
                href: "/forms",
                imageSrc: "/nav/google_apps/forms.jpg",
            },

        ]
    },
]