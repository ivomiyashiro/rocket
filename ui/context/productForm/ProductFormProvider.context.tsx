import { useReducer, ReactNode, FormEvent, ChangeEvent, FocusEvent, useState, useEffect } from 'react';
import { arrayMoveImmutable } from 'array-move';

import { formatPriceNumber, getArrayCombinatios } from 'helpers';

import { IProductFormOption } from './init_state.context';
import { ProductFormContext, productFormReducer, PRODUCT_FORM_INIT_STATE } from './';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

export const ProductFormProvider = ({ children }: { children: ReactNode }) => {

  const [state, dispatch] = useReducer( productFormReducer, PRODUCT_FORM_INIT_STATE );
  const [imgSelectedCount, setImgSelectedCount] = useState(0);
  const [lastWord, setLastWord] = useState('');

  // VARIANTS GENERATOR ------>

  useEffect(() => {
    const optValues = state.options.map(opt => opt.values.map(val => val.name));
    // Check if there are options created.
    if (optValues.length === 1 && optValues[0].length === 1 && optValues[0].includes('')) return;

    const variantNames = getArrayCombinatios(...optValues);

    return dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: { 
        variants: variantNames.map((variantName: string[], i: number) => {
          const variantsArr = state.variants.map(variant => {
            return {
              id: variant.id || Math.random(),
              name: variantName.join(' • '),
              inventory: variant.inventory || '0',
              price: variant.price || '',
              discountPrice: variant.discountPrice || '',
              sku: variant.sku || '',
              barcode: variant.barcode || '',
              images: variant.images || []
            };
          });
          
          return variantsArr[i] || {
            id: Math.random(),
            name: variantName.join(' • '),
            inventory: '0',
            price: '',
            discountPrice: '',
            sku: '',
            barcode: '',
            images: []
          };
        })
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.options]);

  useEffect(() => {
    if (state.options.length === 0) {
      dispatch({
        type: '[PRODUCT FORM] - Handle variants',
        payload: { 
          variants: []
        }
      });
    }
  }, [state.options]);

  // <------ VARIANTS GENERATOR 

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(state);
  };

  // TITLE AND DESCRIPTION ----->

  const handleTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: '[PRODUCT FORM] - Change title value',
      payload: { value: e.target.value }
    });
  };

  const handleDescriptionValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: '[PRODUCT FORM] - Change description value',
      payload: { value: e.target.value }
    });
  };

  // <------- TITLE AND DESCRIPTION


  // OPTIONS ----->

  const handleOptionsForm = ({ options }: { options: IProductFormOption[] }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: { options }
    });
  };

  const handleDeleteOptions = ({ optID }: { optID: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: { 
        options: state.options.filter(opt => opt.id !== optID )
      }
    });
  };

  const handleOptionCardSortEnd = ({ e }: { e: DragEndEvent }) => {
    const { active, over } = e;

    const oldIndex = active.data?.current?.sortable?.index;
    const newIndex = over?.data?.current?.sortable?.index;

    if (active.id !== over?.id) {
      dispatch({
        type: '[PRODUCT FORM] - Handle options',
        payload: {
          options: arrayMove(state.options, oldIndex, newIndex)
        }
      });
    }
  };

  const handleToggleOptions = () => {
    if (state.options.length === 0) {
      return dispatch({
        type: '[PRODUCT FORM] - Handle options',
        payload: {
          options: [{
            id: Math.random().toString(),
            name: { value: '', error: '' },
            values: [{ id: Math.random().toString(),  name: '', error: '' }],
            editing: true,
          }]
        }
      });
    }
    
    dispatch({ type: '[PRODUCT FORM] - Reset product options' });
  };

  const handleAddNewOption = () => {
    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: {
        options: [
          ...state.options,
          {
            id: Math.random().toString(),
            name: { value: '', error: '' },
            values: [{ id: Math.random().toString(),  name: '', error: '' }],
            editing: true,
          }
        ]
      }
    });
  };

  const handleToggleEditStatus = ({ optID }: { optID: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: {
        options: state.options.map(opt => {
          if (opt.id !== optID) return opt;

          return {
            ...opt,
            editing: !opt.editing
          };
        })
      }
    });
  };

  const handleFinishEditing = ({ option }: { option: IProductFormOption }) => {
    if (option.name.value === '') {
      return dispatch({
        type: '[PRODUCT FORM] - Handle options',
        payload: {
          options: state.options.map(opt => {
            if (opt.id !== option.id) return opt;

            return {
              ...opt,
              name: { ...opt.name, error: 'Option name is required.' }
            };
          })
        }
      });
    }

    if (option.values.length === 1 && option.values[0].name === '') {
      return dispatch({
        type: '[PRODUCT FORM] - Handle options',
        payload: {
          options: state.options.map(opt => {
            if (opt.id !== option.id) return opt;

            return {
              ...opt,
              name: { ...opt.name, error: 'Option value is required.' }
            };
          })
        }
      });
    }

    return dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: {
        options: state.options.map(opt => {
          if (opt.id !== option.id) return opt;

          return { 
            ...opt,
            name: { ...opt.name, error: '' },
            values: opt.values.map(val => ({ ...val, error: '' })).filter(val => val.name.length !== 0),
            editing: !opt.editing, 
            error: '' 
          };
        })
      }
    });
  };

  const handleDeleteOption = ({ optID }: { optID: string }) => {
    setLastWord('');
    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: {
        options: state.options.filter(opt => opt.id !== optID )
      }
    });
  };

  const handleOptionNameValue = ({ optID, e }: { optID: string; e: ChangeEvent<HTMLInputElement> }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: {
        options: state.options.map(opt => {
          if (opt.id !== optID) return opt;

          return {
            ...opt,
            name: { ...opt.name, value: e.target.value }
          };
        })
      }
    });
  };

  const handleOptionValues = ({ optID, optValueID, e }: { optID: string; optValueID: string; e: ChangeEvent<HTMLInputElement> }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: {
        options: state.options.map(opt => {
          if (opt.id !== optID) return opt;

          return {
            ...opt,
            values: opt.values.map(optValue => {
              if (optValue.id !== optValueID) return optValue;
              setLastWord(optValue.name);
              return {
                ...optValue,
                name: e.target.value
              };
            })
          };
        })
      }
    });
  };

  const handleDeleteOptionValue = ({ optID, optValueID }: { optID: string; optValueID: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: {
        options: state.options.map(opt => {
          if (opt.id !== optID) return opt;
  
          return {
            ...opt,
            values: opt.values.filter(optValue => optValue.id !== optValueID)
          };
        })
      }
    });
  };

  const handleAddNewOptionValue = ({ optID }: { optID: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: {
        options: state.options.map(opt => {
          if (opt.id !== optID) return opt; 
          return { 
            ...opt, 
            values: [ 
              ...opt.values, 
              {
                id: new Date().valueOf().toString(),
                name: '',
                error: ''
              }
            ]
          };
        })
      }
    });
  };

  const handleOptionValueErrors = ({ optID, optValueID, e }: { optID: string; optValueID: string; e: FocusEvent<HTMLInputElement> }) => {
    if (e.target.value !== '') return;

    dispatch({
      type: '[PRODUCT FORM] - Handle options',
      payload: {
        options: state.options.map(opt => {
          if (opt.id !== optID) return opt; 
    
          return { 
            ...opt, 
            values: opt.values.map(value => {
              if (value.id !== optValueID) return value;
              return { ...value, name: lastWord };
            }) 
          };
        })
      }
    });
  };

  const handleOptionValueSortEnd = ({ optID, e }: { optID: string; e: DragEndEvent }) => {
    const { active, over } = e;

    if (active.id !== over?.id) {
      dispatch({
        type: '[PRODUCT FORM] - Handle options',
        payload: {
          options: state.options.map(opt => {
            if (opt.id !== optID) return opt; 
            const oldIndex = active.data?.current?.sortable?.index;
            const newIndex = over?.data?.current?.sortable?.index;

            
            return { 
              ...opt, 
              values: arrayMove(opt.values, oldIndex, newIndex)
            };
          })
        }
      });
    }
  };

  // <------- OPTIONS

  // VARIANTS -------> 

  const handleVariantPrice = ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement> }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map( variant => {
          if (variant.id !== id) return variant;
  
          return {
            ...variant,
            price: e.target.value
          };
        })
      }
    });
  };

  const handleDiscountPrice = ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement> }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map( variant => {
          if (variant.id !== id) return variant;
          return {
            ...variant,
            discountPrice: e.target.value
          };
        })
      }
    });
  };

  const handleFormatPrice = ({ id }: { id: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map( variant => {
          if (variant.id !== id) return variant;
          return {
            ...variant,
            price: formatPriceNumber({ value: variant.price })
          };
        })
      }
    });
  };

  const handleFormatDiscountPrice = ({ id }: { id: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map( variant => {
          if (variant.id !== id) return variant;
          return {
            ...variant,
            discountPrice: formatPriceNumber({ value: variant.discountPrice })
          };
        })
      }
    });
  };

  const handleInventoryChange = ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement> }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map(variant => {
          if (variant.id !== id) return variant;
          if (e.target.value === '') return variant;
  
          return {
            ...variant,
            inventory: e.target.value
          };
        })
      }
    });
  };

  const handleIncreaseInventory = ({ id }: { id: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map(variant => {
          if (variant.id !== id) return variant;
  
          return {
            ...variant,
            inventory: (+variant.inventory + 1).toString()
          };
        })
      }
    });
  };

  const handleDecreaseInventory = ({ id }: { id: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map(variant => {
          if (variant.id !== id) return variant;
          if (variant.inventory === '0') return variant;

          return {
            ...variant,
            inventory: (+variant.inventory - 1).toString()
          };
        })
      }
    });
  };

  const handleSKU = ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement> }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map(variant => {
          if (variant.id !== id) return variant;
  
          return {
            ...variant,
            sku: e.target.value
          };
        })
      }
    });
  };

  const handleBarcode = ({ id, e }: { id: string; e: ChangeEvent<HTMLInputElement> }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map(variant => {
          if (variant.id !== id) return variant;
  
          return {
            ...variant,
            barcode: e.target.value
          };
        })
      }
    });
  };

  const handleVariantMedia = ({ id, imageUrl }: { id: string; imageUrl: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map(variant => {
          if (variant.id !== id) return variant;
  
          return { 
            ...variant, 
            images: [ 
              ...variant.images, 
              {
                id: Math.random().toString(),
                url: imageUrl,
                isChecked: false
              }
            ] 
          };
        })
      }
    });
  };

  const handleTogglePopup = ({ id }: { id: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map(variant => {
          if (variant.id !== id) return variant;

          return {
            ...variant,
            popupOpen: !variant.popupOpen
          };
        })
      }
    });
  };

  const handleImageSortEnd = ({ variantID, e }: { variantID: string, e: DragEndEvent }) => { 
    const { active, over } = e;

    if (active.id !== over?.id) {
      dispatch({
        type: '[PRODUCT FORM] - Handle variants',
        payload: {
          variants: state.variants.map(variant => {
            if (variant.id !== variantID) return variant; 
            const oldIndex = active.data?.current?.sortable?.index;
            const newIndex = over?.data?.current?.sortable?.index;
    
            return { 
              ...variant,
              images: arrayMove(variant.images, oldIndex, newIndex)
            };
          })
        }
      });
    }
  };

  const handleToggleImageCheckState = ({ variantID, imageID }: { variantID: string; imageID: string }) => {
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map(variant => {
          if (variant.id !== variantID) return variant;

          return {
            ...variant,
            images: variant.images.map(img => {
              if (img.id !== imageID) return img;

              if (!img.isChecked) {
                setImgSelectedCount(prev => prev + 1);
              } else {
                setImgSelectedCount(prev => prev - 1);
              }
            
              return {
                ...img,
                isChecked: !img.isChecked
              };
            })
          };
        })
      }
    });
  };

  const handleDeleteImages = ({ variantID }: { variantID: string }) => {
    setImgSelectedCount(0);
    dispatch({
      type: '[PRODUCT FORM] - Handle variants',
      payload: {
        variants: state.variants.map(variant => {
          if (variant.id !== variantID) return variant;

          return {
            ...variant,
            images: variant.images.filter(img => img.isChecked === false)
          };
        })
      }
    });
  };

  // <------- VARIANTS

  return (
    <ProductFormContext.Provider value={ {
      ...state,
      imgSelectedCount,

      // Methods
      handleSubmit,

      handleTitleValue,
      handleDescriptionValue,

      handleOptionsForm,
      handleDeleteOptions,
      handleToggleOptions,
      handleAddNewOption,
      handleOptionCardSortEnd,
      handleToggleEditStatus,
      handleFinishEditing,
      handleDeleteOption,
      handleOptionNameValue,
      handleOptionValues,
      handleDeleteOptionValue,
      handleAddNewOptionValue,
      handleOptionValueErrors,
      handleOptionValueSortEnd,

      handleVariantPrice,
      handleDiscountPrice,
      handleInventoryChange,
      handleIncreaseInventory,
      handleDecreaseInventory,
      handleSKU,
      handleBarcode,
      handleVariantMedia,
      handleTogglePopup,
      handleFormatPrice,
      handleFormatDiscountPrice,
      handleToggleImageCheckState,
      handleImageSortEnd,
      handleDeleteImages
    } }>
      { children }
    </ProductFormContext.Provider>
  );
};
