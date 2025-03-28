'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { useLanguage } from '@/context/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Kullanıcı adınız en az 2 karakter olmalıdır.',
  }),
  lastname: z.string().min(2, {
    message: 'Kullanıcı adınız en az 2 karakter olmalıdır.',
  }),
  phone: z.string().min(2, {
    message: 'Kullanıcı adınız en az 2 karakter olmalıdır.',
  }),
  desc: z.string().min(2, {
    message: 'Kullanıcı adınız en az 2 karakter olmalıdır.',
  }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export function ContactForm() {
  const { locale } = useLanguage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastname: '',
      phone: '',
      desc: '',
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between  gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{locale === 'en' ? 'Name' : 'İsm'}</FormLabel>
                <FormControl>
                  <Input placeholder={locale === 'en' ? 'Name' : 'İsm'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{locale === 'en' ? 'LastName' : 'Soyad'}</FormLabel>
                <FormControl>
                  <Input placeholder={locale === 'en' ? 'LastName' : 'Soyad'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{locale === 'en' ? 'Phone' : 'Cap Telegfon'}</FormLabel>
              <FormControl>
                <Input placeholder={locale === 'en' ? 'Phone' : 'Cap Telegfon'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Textarea placeholder={locale === 'en' ? 'Whire message' : 'Mesaj yazınız'} />
        <Button type="submit">{locale === 'en' ? 'Send' : 'Gönder'}</Button>
      </form>
    </Form>
  );
}
