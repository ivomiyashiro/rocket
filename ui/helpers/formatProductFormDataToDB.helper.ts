import { IProductForm } from 'context';
import { IProduct } from 'interfaces';

interface Props { data: IProductForm }

export const formatProductFormDataToDB = ({ data }: Props): IProduct => {

  if ( data.options.length !== 0) {
    console.log(data.options.map(opt => ({ name: opt.name.value, values: opt.values.map(val => ( val.name )) })));
    return {
      title: data.title.value,
      vendor: data.vendor.value,
      category: data.category.value,
      options: data.options.map(opt => ({ name: opt.name.value, values: opt.values.map(val => ( val.name )) })),
      variants: data.variants.map(variant => ({ ...variant, images: variant.images.map( img => img.url ) })) as any,
      description: data.description.value,
      status: data.status,
      images: data.images.map(img => img.url)
    };
  }
 
  return {
    title: data.title.value,
    vendor: data.vendor.value,
    category: data.category.value,
    description: data.description.value,
    price: data.price || '0',
    discountPrice: data.discountPrice || '0',
    sku: data.sku,
    barcode: data.barcode,
    status: data.status,
    images: data.images.map(img => img.url)
  };
};
