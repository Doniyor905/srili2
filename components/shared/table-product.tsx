import { Table, TableBody, TableCaption, TableCell, TableRow } from '@/components/ui/table';
import { useLanguage } from '@/context/LanguageContext';
interface Props {
  category: string;
  size: string | null;
  koku: string | null;
}

export const TableProduct: React.FC<Props> = ({ category, size, koku }) => {
  const { locale } = useLanguage();
  const invoices = [
    {
      invoice: locale === 'en' ? 'Gender' : 'Cinsiyet',
      paymentStatus: category,
    },
    {
      invoice: locale === 'en' ? 'Volume' : 'Hacim',
      paymentStatus: size,
    },
    {
      invoice: locale === 'en' ? 'Fragrance Family' : 'Koku Ailesi',
      paymentStatus: koku,
    },
  ];
  return (
    <Table className="w-full mx-auto mt-[50px]">
      <TableCaption className="caption-top text-left font-bold text-[26px] text-black mb-5">
        {locale === 'en' ? 'About the product' : 'Ürün hakkında'}
      </TableCaption>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
