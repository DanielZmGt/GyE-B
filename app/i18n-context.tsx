"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const messages: Record<Language, any> = {
    en: {
        nav: {
            shop: 'Shop',
            virtualFramer: 'Virtual Framer',
            services: 'Services',
            portfolio: 'Portfolio',
            about: 'About',
            contact: 'Contact',
        },
        services: {
            title: 'Our Expertise',
        },
        lightbox: {
            projectPeriod: 'Project Period',
            archiveDate: '2015 - 2018 Archive',
        },
        hero: {
            subtitle: 'Master Craftsmanship since 2013',
            titleHighlight: 'Custom Framing',
            titlePre: 'Elevate Your Art with',
            desc: 'Specializing in large-scale frames and artistic mounting in the Bajío region. We transform your pieces into timeless masterpieces.',
            viewPortfolio: 'View Portfolio',
            contact: 'Contact Us',
        },
        about: {
            title: 'A Legacy of Craftsmanship',
            desc: 'Since 2013, Galeria & Enmarcados del Bajio has been dedicated to the art of presentation. We believe that every piece of art, photograph, or memorabilia deserves a frame that not only protects it but elevates its visual impact.',
            archive: 'Rich Archive',
            archiveDesc: 'Drawing from our extensive portfolio to bring timeless techniques to modern framing.',
            materials: 'Premium Materials',
            materialsDesc: 'Sourcing only the finest hardwoods including Walnut, Oak, and Mahogany for lasting elegance.',
            support: 'USA Support',
            supportDesc: 'While rooted in the Bajío region, we provide dedicated support for our clients across the USA.',
        },
        footer: {
            title: 'GALERIA & ENMARCADOS',
            desc: 'Elevating art through premium custom framing and artistic mounting. Serving the Bajío region and providing USA support with unmatched craftsmanship.',
            contactHeading: 'Contact',
            hoursHeading: 'Hours',
            days: {
                weekdays: 'Mon - Fri',
                saturday: 'Saturday',
                sunday: 'Sunday',
            },
            status: {
                closed: 'Closed',
            },
            rights: 'Galeria & Enmarcados del Bajio. All rights reserved.',
        },
        gallery: {
            title: 'Selected Works',
            subtitle: 'A curated selection from our 2015-2018 archive, showcasing our dedication to craftsmanship and detail.',
            categories: {
                all: 'All',
                framing: 'Framing',
                mounting: 'Mounting',
                maintenance: 'Maintenance',
            },
        },
        shop: {
            title: 'Our Shop',
            subtitle: 'Explore our works and add what interests you to the cart to request a quote via WhatsApp.',
            categories: {
                all: 'All',
                framing: 'Framing',
                mounting: 'Mounting',
                restoration: 'Restoration',
            },
        },
        framer: {
            title: 'Virtual Framer',
            subtitle: 'Design your custom frame. Adjust the molding, matting size, and colors to create the perfect museum-quality piece.',
            step1: '1. Frame Style',
            step2: '2. Mat Board',
            matSize: 'Mat Size',
            step3: '3. Frame Thickness',
            thin: 'Thin',
            wide: 'Wide',
            upload: 'Upload Your Artwork',
        },
        cart: {
            title: 'Cart',
            empty: 'Your cart is empty',
            estimatedTotal: 'Estimated Total',
            disclaimer: '* Prices are for reference only. Final price confirmed via WhatsApp.',
            quoteButton: 'Request Quote via WhatsApp',
            whatsappMessage: 'Hello! I would like to request a quote for the following products:',
            estimatedTotalMsg: 'Estimated total:',
            closingMsg: 'Looking forward to hearing from you, thanks!',
        },
    },
    es: {
        nav: {
            shop: 'Tienda',
            virtualFramer: 'Enmarcado Virtual',
            services: 'Servicios',
            portfolio: 'Portafolio',
            about: 'Nosotros',
            contact: 'Contacto',
        },
        services: {
            title: 'Nuestra Experiencia',
        },
        lightbox: {
            projectPeriod: 'Periodo del Proyecto',
            archiveDate: 'Archivo 2015 - 2018',
        },
        hero: {
            subtitle: 'Maestría Artesanal desde 2013',
            titleHighlight: 'Enmarcados a Medida',
            titlePre: 'Eleva el Nivel de tu Arte con',
            desc: 'Especialistas en marcos de gran escala y montaje artístico en la región del Bajío. Transformamos tus obras en piezas maestras atemporales.',
            viewPortfolio: 'Ver Portafolio',
            contact: 'Contáctanos',
        },
        about: {
            title: 'Un Legado de Artesanía',
            desc: 'Desde 2013, Galería & Enmarcados del Bajío se ha dedicado al arte de la presentación. Creemos que toda obra, fotografía o recuerdo merece un marco que no solo lo proteja, sino que realce su impacto visual.',
            archive: 'Rico Archivo',
            archiveDesc: 'Inspirados en nuestro extenso portafolio para aplicar técnicas atemporales al enmarcado moderno.',
            materials: 'Materiales Premium',
            materialsDesc: 'Utilizando solo las mejores maderas nobles, incluyendo nogal, roble y caoba, para una elegancia duradera.',
            support: 'Soporte en EUA',
            supportDesc: 'Aunque estamos arraigados en el Bajío, ofrecemos atención dedicada a nuestros clientes en todo Estados Unidos.',
        },
        footer: {
            title: 'GALERÍA & ENMARCADOS',
            desc: 'Elevando el arte a través de enmarcados personalizados y montajes artísticos de primera calidad. Sirviendo a la región del Bajío y ofreciendo soporte en EUA con una artesanía inigualable.',
            contactHeading: 'Contacto',
            hoursHeading: 'Horarios',
            days: {
                weekdays: 'Lun - Vie',
                saturday: 'Sábado',
                sunday: 'Domingo',
            },
            status: {
                closed: 'Cerrado',
            },
            rights: 'Galería & Enmarcados del Bajío. Todos los derechos reservados.',
        },
        gallery: {
            title: 'Obras Destacadas',
            subtitle: 'Una selección curada de nuestro archivo 2015-2018, mostrando nuestra dedicación a la artesanía y al detalle.',
            categories: {
                all: 'Todos',
                framing: 'Enmarcado',
                mounting: 'Montaje',
                maintenance: 'Mantenimiento',
            },
        },
        shop: {
            title: 'Nuestra Tienda',
            subtitle: 'Explora nuestros trabajos y agrega los que te interesen al carrito para cotizar por WhatsApp.',
            categories: {
                all: 'Todos',
                framing: 'Enmarcado',
                mounting: 'Montaje',
                restoration: 'Restauracion',
            },
        },
        framer: {
            title: 'Enmarcado Virtual',
            subtitle: 'Diseña tu marco a medida. Ajusta la moldura, el tamaño de la marialuisa y los colores para crear la pieza perfecta con calidad de museo.',
            step1: '1. Estilo de Marco',
            step2: '2. Marialuisa',
            matSize: 'Tamaño de Marialuisa',
            step3: '3. Grosor del Marco',
            thin: 'Delgado',
            wide: 'Ancho',
            upload: 'Sube tu Obra',
        },
        cart: {
            title: 'Carrito',
            empty: 'Tu carrito esta vacio',
            estimatedTotal: 'Total estimado',
            disclaimer: '* Los precios son referenciales. El precio final se confirma por WhatsApp.',
            quoteButton: 'Cotizar por WhatsApp',
            whatsappMessage: 'Hola! Me gustaria cotizar los siguientes productos:',
            estimatedTotalMsg: 'Total estimado:',
            closingMsg: 'Quedo al pendiente, gracias!',
        },
    },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('es');

    useEffect(() => {
        const storedLang = localStorage.getItem('language') as Language;
        if (storedLang && (storedLang === 'en' || storedLang === 'es')) {
            setLang(storedLang);
        }
    }, []);

    const handleSetLang = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem('language', newLang);
    };

    const t = (path: string): string => {
        const keys = path.split('.');
        let current: any = messages[lang];
        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key];
            } else {
                return path;
            }
        }
        return typeof current === 'string' ? current : path;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
