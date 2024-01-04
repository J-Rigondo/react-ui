import Avatar from '@/components/ui/avatar';
import { MdVerifiedUser } from 'react-icons/md';

const AvatarSample = () => {
  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Avatar</h2>
      <div className="flex flex-wrap items-center gap-2">
        <Avatar
          src="https://avatars.githubusercontent.com/u/48760061?v=4"
          size="sm"
          fallback="A"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/48760061?v=4"
          fallback="A"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/48760061?v=4"
          size="lg"
          fallback="A"
        />
        <Avatar fallback="A" />
        <Avatar fallback="A" size="lg" />
        <Avatar
          fallback={<MdVerifiedUser className="h-5 w-5 text-white" />}
          size="lg"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/48760061?v=4"
          fallback="A"
          size="lg"
          radius="md"
        />
        <Avatar fallback="A" size="lg" radius="md" />
      </div>
    </div>
  );
};

export default AvatarSample;
