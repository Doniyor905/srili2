'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../messages/en.json';
import ru from '../messages/tr.json';

// ✅ Экспортируем тип `Messages`
export type Messages = typeof en;

// Типизация для поддерживаемых языков
type Language = 'en' | 'ru';

// Типизация контекста
interface LanguageContextProps {
  locale: Language;
  messages: Messages;
  changeLanguage: (lang: Language) => void;
}

// Создаём контекст для управления языком
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Загружаем переводы в зависимости от выбранного языка
const getMessages = (locale: Language): Messages => {
  switch (locale) {
    case 'ru':
      return ru;
    case 'en':
    default:
      return en;
  }
};

// ✅ Провайдер контекста для управления языком
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // ✅ Инициализируем язык как 'en' по умолчанию
  const [locale, setLocale] = useState<Language>('en');
  const [messages, setMessages] = useState<Messages>(getMessages('en'));

  // ✅ Используем useEffect для установки языка из localStorage на клиенте
  useEffect(() => {
    const storedLocale = localStorage.getItem('locale') as Language;
    if (storedLocale && ['en', 'ru'].includes(storedLocale)) {
      setLocale(storedLocale);
      setMessages(getMessages(storedLocale));
    }
  }, []);

  // ✅ Функция для изменения языка
  const changeLanguage = (lang: Language) => {
    setLocale(lang);
    setMessages(getMessages(lang));
    localStorage.setItem('locale', lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, messages, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ Хук для использования контекста
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
