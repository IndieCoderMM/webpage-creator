const PageBlock = ({
  block,
  handleRemove,
  className,
}: {
  block: Block;
  handleRemove?: (id: string) => void;
  className?: string;
}) => {
  return (
    <div
      className={`flex w-full items-center gap-1 rounded-md px-2 py-2 select-none ${className}`}
    >
      <h3 className="capitalize">{block.type}</h3>

      {handleRemove && (
        <button
          className="relative ml-auto flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-red-500 hover:bg-gray-200 hover:text-red-700"
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(block.id);
          }}
        >
          <span className="sr-only">Remove Block</span>
          &times;
        </button>
      )}
    </div>
  );
};

export default PageBlock;
