import { DragEndEvent } from '@dnd-kit/core';
import { ChangeEvent, createContext, FocusEvent, FormEvent } from 'react';
import { IProductForm, IProductFormOption } from './';

interface ContextProps extends IProductForm {
  imgSelectedCount: number;

  // Methods

  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;

  // Title and Description --->

  handleTitleValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;

  // <--- Title and Description

  // Options --->

  handleOptionsForm: ({ options }: { options: IProductFormOption[] }) => void;
  handleDeleteOptions: ({ optID }: { optID: string }) => void;
  handleOptionCardSortEnd: ({ e }: { e: DragEndEvent }) => void;
  handleToggleOptions: () => void;
  handleAddNewOption: () => void;
  handleToggleEditStatus: ({ optID }: { optID: string }) => void;
  handleFinishEditing: ({ option }: { option: IProductFormOption }) => void;
  handleDeleteOption: ({ optID }: { optID: string }) => void;
  handleOptionNameValue: ({ optID, e }: { optID: string; e: ChangeEvent<HTMLInputElement> }) => void;
  handleOptionValues: ({ optID, optValueID, e }: { optID: string; optValueID: string; e: ChangeEvent<HTMLInputElement>; }) => void;
  handleDeleteOptionValue: ({ optID, optValueID }: { optID: string; optValueID: string; }) => void;
  handleAddNewOptionValue: ({ optID }: { optID: string }) => void;
  handleOptionValueErrors: ({ optID, optValueID, e }: { optID: string; optValueID: string; e: FocusEvent<HTMLInputElement> }) => void;
  handleOptionValueSortEnd: ({ optID, e }: { optID: string; e: DragEndEvent }) => void;

  // <--- Options

  handleVariantPrice: ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement>; }) => void;
  handleDiscountPrice: ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement>; }) => void;
  handleInventoryChange: ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement>; }) => void;
  handleIncreaseInventory: ({ id }: { id: string }) => void;
  handleDecreaseInventory: ({ id }: { id: string }) => void;
  handleSKU: ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement>; }) => void;
  handleBarcode: ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement>; }) => void;
  handleVariantMedia: ({ id, imageUrl }: { id: string; imageUrl: string }) => void;
  handleTogglePopup: ({ id }: { id: string }) => void;
  handleFormatDiscountPrice: ({ id }: { id: string; }) => void;
  handleFormatPrice: ({ id }: { id: string; }) => void;
  handleToggleImageCheckState: ({ variantID, imageID }: { variantID: string; imageID: string }) => void;
  handleImageSortEnd: ({ variantID, e }: { variantID: string; e: DragEndEvent }) => void;
  handleDeleteVariantImages: ({ variantID }: { variantID: string }) => void;
  
  // Images --->

  handleAddGeneralImage: ({ imgeUrl }: { imgeUrl: string }) => void
  handleDeleteGeneralImage: () => void;
  handleToggleGeneralImageCheckState: ({ imageID }: { imageID: string }) => void;
  handleGeneralImageSortEnd: ({ e }: { e: DragEndEvent }) => void;

  // <--- Images

  // Status --->

  toggleProductStatus: () => void;

  // <--- Status

  // Organization --->

  handleVendorValue: ({ e }: {e: ChangeEvent<HTMLInputElement>}) => void;
  handleCategoryValue: ({ e }: {e: ChangeEvent<HTMLInputElement>}) => void;

  // <--- Organization

  // Pricing --->

  handlePriceChange: ({ value }: { value: string }) => void;
  handleDiscountPriceChange: ({ value }: { value: string }) => void;

  // <--- Pricing

  // Inventory --->

  handleProductSKU: ({ e }: { e: ChangeEvent<HTMLInputElement>; }) => void;
  handleProductBarcode: ({ e }: { e: ChangeEvent<HTMLInputElement>; }) => void;
  handleProductQuantityChange: ({ e }: { e: ChangeEvent<HTMLInputElement>; }) => void;
  handleProductQuantityIncrese: () => void;
  handleProductQuantityDecrese: () => void;

  // <--- Inventory
}


export const ProductFormContext = createContext({} as ContextProps );
