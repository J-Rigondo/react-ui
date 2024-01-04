import Button from '@/components/ui/button';
import { MdAdd } from 'react-icons/md';

const ButtonSample = () => {
  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Button</h2>
      <div className="flex flex-wrap items-center gap-2">
        <Button>default</Button>
        <Button className="bg-teal-600 text-white">custom</Button>
        <Button className="bg-teal-600 text-white">CUSTOM</Button>
        <Button className="bg-orange-500 text-white">한글</Button>
        <button className="inline-flex h-10 items-center justify-start rounded-md bg-orange-500 px-2 leading-[2.5rem]">
          <span className="">custom</span>
        </button>
        <Button variant="primary">
          <MdAdd className="mr-1 h-5 w-5" />
          더하기
        </Button>
        <Button variant="primary">primary</Button>
        <Button variant="primary" disabled>
          primary
        </Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>

        <Button className="bg-sky-600 text-xs text-white" size="sm">
          small
        </Button>
        <Button className="bg-violet-600 text-white">default</Button>
        <Button className="bg-rose-600 text-xl text-white" size="lg">
          large
        </Button>
        <Button isLoading variant="primary" size="sm">
          로딩
        </Button>
        <Button isLoading variant="primary">
          로딩
        </Button>
        <Button isLoading variant="primary" size="lg">
          로딩
        </Button>
      </div>

      <div className="my-4">
        <Button variant="primary" fullWidth>
          Full Width
        </Button>
      </div>
    </div>
  );
};

export default ButtonSample;
