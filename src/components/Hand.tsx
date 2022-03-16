import { HandState } from '../App';
import { SetState } from '../types/SetState';
import { IconPaper, IconRock, IconScissors } from './svgs';

const Hand: React.FC<{
  type: HandState;
  size?: 'lg';
  ripple?: boolean;
  handleClick?: SetState<HandState>;
}> = ({ type, size, ripple, handleClick }) => {
  return (
    <button
      type='button'
      className={`inline-grid aspect-circle place-items-center justify-center rounded-full ${
        type === 'paper'
          ? 'btn-bottom-shadow bg-gradient-to-b from-paperGradientFrom to-paperGradientTo/70'
          : type === 'rock'
          ? 'btn-bottom-shadow bg-gradient-to-b from-rockGradientFrom to-rockGradientTo'
          : type === 'scissors'
          ? 'btn-bottom-shadow bg-gradient-to-b from-scissorsGradientFrom to-scissorsGradientTo'
          : 'bg-transparent'
      } ${size === 'lg' ? 'w-72' : 'w-52'} ${ripple && 'ripple'}`}
      onClick={() => handleClick && handleClick(type)}
    >
      <div
        className={`inline-grid aspect-circle w-40 place-items-center rounded-full ${
          type ? 'btn-top-shadow bg-white' : 'bg-gray-700'
        } ${size === 'lg' ? 'w-56' : 'w-40'}`}
      >
        {type === 'paper' ? (
          <IconPaper className={`${size === 'lg' && 'scale-150'}`} />
        ) : type === 'rock' ? (
          <IconRock className={`${size === 'lg' && 'scale-150'}`} />
        ) : type === 'scissors' ? (
          <IconScissors className={`${size === 'lg' && 'scale-150'}`} />
        ) : (
          <div></div>
        )}
      </div>
    </button>
  );
};

export default Hand;
