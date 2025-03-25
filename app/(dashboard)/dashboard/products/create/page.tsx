'use client';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { TextRedactor } from '@/components/shared/text-redactor';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ProductCreate } from '@/services/product-create';
import { UploadImageInput } from '@/components/shared/upload-image-input';
import Image from 'next/image';
import { X } from 'lucide-react';

const formSchema = z.object({
  productTr: z.string().min(2, {
    message: 'Kullanıcı adınız en az 2 karakter olmalıdır.',
  }),
  productEn: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  descTr: z.string().min(20, {
    message: 'Kullanıcı adınız en az 20 karakter olmalıdır.',
  }),
  descEn: z.string().min(20, {
    message: 'Kullanıcı adınız en az 20 karakter olmalıdır.',
  }),
  category: z.enum(['MALE', 'FEMALE', 'UNISEX', 'COSMETICS'], {
    required_error: 'Kategori seçimi zorunludur',
  }),
  sizeProduct: z.string().min(2, {
    message: '',
  }),
  typeProductTR: z.string().min(2, {
    message: 'Kullanıcı adınız en az 2 karakter olmalıdır.',
  }),
  typeProductEN: z.string().min(2, {
    message: 'Kullanıcı adınız en az 2 karakter olmalıdır.',
  }),
  imageValue: z.string().min(2, {
    message: 'Lütfen bir resim seçiniz',
  }),
});

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  const formData = {
    name_tr: values.productTr,
    name_en: values.productEn,
    description_tr: values.descTr,
    description_en: values.descEn,
    category: values.category,
    size: values.sizeProduct,
    type_tr: values.typeProductTR,
    type_en: values.typeProductEN,
    image: values.imageValue, // позже заменим на file upload
  };

  try {
    await ProductCreate.create(formData);
    alert('Ürün başarıyla eklendi!');
  } catch (err) {
    alert('Bir hata oluştu!');
    console.error(err);
  }
};

export default function CreatePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productTr: '',
      productEn: '',
      descTr: '',
      descEn: '',
      category: undefined,
      sizeProduct: '',
      typeProductTR: '',
      typeProductEN: '',
      imageValue: '',
    },
  });

  return (
    <div className="mb-10">
      <h2 className="text-[20px] font-bold">Ürün ekleme</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-7">
          <FormField
            control={form.control}
            name="productTr"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ürün adı (TR)</FormLabel>
                <FormControl>
                  <Input placeholder="Ürün adı (TR)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productEn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ürün adı (EN)</FormLabel>
                <FormControl>
                  <Input placeholder="Ürün adı (EN)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="descTr"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ürün tanımı (TR)</FormLabel>
                <TextRedactor value={field.value} onChange={field.onChange} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="descEn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ürün tanımı (EN)</FormLabel>
                <TextRedactor value={field.value} onChange={field.onChange} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ürün Kategorisi</FormLabel>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="MALE" id="option-one" />
                    <Label htmlFor="option-one">Erkek</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="FEMALE" id="option-two" />
                    <Label htmlFor="option-two">Kadın</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="UNISEX" id="option-three" />
                    <Label htmlFor="option-three">Unisex</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="COSMETICS" id="option-four" />
                    <Label htmlFor="option-four">Güzellik ve Bakım</Label>
                  </div>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sizeProduct"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ürün Hacmi</FormLabel>
                <FormControl>
                  <Input className="w-[200px]" placeholder="Ürün Hacmi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="typeProductTR"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Koku Ailesi (TR)</FormLabel>
                  <FormControl>
                    <Input className="w-[200px]" placeholder="Koku Ailesi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="typeProductEN"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Koku Ailesi (TR)</FormLabel>
                  <FormControl className="flex">
                    <Input className="w-[200px]" placeholder="Koku Ailesi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="imageValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ürün görseli</FormLabel>
                <FormControl className="flex">
                  <div className="flex items-center gap-3">
                    <UploadImageInput onUploaded={(url) => field.onChange(url)} />
                    {field.value && (
                      <Image
                        className="object-cover rounded"
                        width={280}
                        height={330}
                        src={field.value}
                        alt="photo"
                      />
                    )}
                    <X className="cursor-pointer" onClick={() => field.onChange('')} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="cursor-pointer" type="submit">
            Ürün ekle
          </Button>
        </form>
      </Form>
    </div>
  );
}
