import { COLORS } from './colors';

export const TYPOGRAPHY = {

    // TÍTULOS
    h1: {
        fontSize: 32,
        fontWeight: '700' as const,
        color: COLORS.text.primary,
        lineHeight: 40,
    },

    h2: {
        fontSize: 28,
        fontWeight: '700' as const,
        color: COLORS.text.primary,
        lineHeight: 40,
    },

    h3: {
        fontSize: 24,
        fontWeight: '600' as const,
        color: COLORS.text.primary,
        lineHeight: 40,
    },

    h4: {
        fontSize: 20,
        fontWeight: '600' as const,
        color: COLORS.text.primary,
        lineHeight: 40,
    },

    //CORPO
    bodyLarge: {
        fontSize: 16,
        fontWeight: 'normal' as const,
        color: COLORS.text.primary,
        lineHeight: 24,
    },

    bodyMedium: {
        fontSize: 14,
        fontWeight: 'normal' as const,
        color: COLORS.text.primary,
        lineHeight: 24,
    },

    bodySmall: {
        fontSize: 12,
        conftWeight: 'normal' as const,
        color: COLORS.text.light,
        lineHeight: 18,
    },

   //TEXTOS ADICIONAIS 
    caption: {
        fontSize: 11,
        fontWeight: 'normal' as const,
        color: COLORS.text.light,
        lineHeight: 16,
    },
  
    overline: {
        fontSize: 10,
        fontWeight: '500' as const,
        color: COLORS.text.light,
        lineHeight: 16,
        textTransform: 'uppercase' as const,
        letterSpacing: 1.5,
    },

    //BOTÕES
    buttonLarge: {
        fontSize: 16,
        fontWeight: '600' as const,
        color: COLORS.text.white,
        lineHeight: 24,
    },
    
    buttonMedium: {
        fontSize: 14,
        fontWeight: '600' as const,
        color: COLORS.text.white,
        lineHeight: 20,
    },
    
    buttonSmall: {
        fontSize: 12,
        fontWeight: '500' as const,
        color: COLORS.text.white,
        lineHeight: 18,
    },
  
    //LINKS
    link: {
        fontSize: 14,
        fontWeight: '500' as const,
        color: COLORS.primary,
        lineHeight: 20,
    },
    
    linkLarge: {
        fontSize: 16,
        fontWeight: '500' as const,
        color: COLORS.primary,
        lineHeight: 24,
    },

    //INPUTS
    inputLabel: {
        fontSize: 14,
        fontWeight: '500' as const,
        color: COLORS.text.light,
        lineHeight: 20,
    },
  
    inputText: {
        fontSize: 16,
        fontWeight: 'normal' as const,
        color: COLORS.text.primary,
        lineHeight: 24,
    },
  
    inputPlaceholder: {
        fontSize: 16,
        fontWeight: 'normal' as const,
        color: COLORS.text.light,
        lineHeight: 24,
    },
}