interface Props { handleClick: () => void | undefined;}

export const WithoutMedia = ({ handleClick }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        className="rounded-md bg-indigo-200 px-4 py-1 text-xs w-20 text-indigo-600 font-medium hover:text-indigo-800"
        type="button"
        onClick={ handleClick }
      >
        Add file
      </button>
      <span className="text-gray-400 text-xs w-full whitespace-nowrap top-8 -left-14">
        Click the button or drag the images.
      </span>
    </div>
  );
};
