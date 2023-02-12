import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';



function clampAvatars(avatars, options = { max: 5 }) {
  const { max = 5, total } = options;
  let clampedMax = max < 2 ? 2 : max;
  const totalAvatars = total || avatars.length;
  if (totalAvatars === clampedMax) {
    clampedMax += 1;
  }
  clampedMax = Math.min(totalAvatars + 1, clampedMax);
  const maxAvatars = Math.min(avatars.length, clampedMax - 1);
  const surplus = Math.max(totalAvatars - clampedMax, totalAvatars - maxAvatars, 0);
  return { avatars: avatars.slice(0, maxAvatars).reverse(), surplus };
}

export default function AvatarReviews() {
  const dataFromTheServer = {
    people: [
      {
        alt: 'Remy Sharp',
        src: 'review_2.png',
      },
      {
        alt: 'Travis Howard',
        src: 'review_2.png',
      },
      {
        alt: 'Agnes Walker',
        src: 'review_2.png',
      },
      {
        alt: 'Trevor Henderson',
        src: 'review_2.png',
      },
    ],
    total: 24,
  };
  const { avatars, surplus } = clampAvatars(dataFromTheServer.people, {
    max: 5,
    total: dataFromTheServer.total,
  });
  return (
    <AvatarGroup   sx={{
        "--Avatar-ringSize": "8px",
        "--AvatarGroup-gap": "-8px"
      }}>
      {avatars.map((avatar) => (
      <Avatar  style={{ boxShadow:'3px 3px 0 #000'}} key={avatar.alt} {...avatar} /> 
      ))}

      {!!surplus && <Avatar  style={{ boxShadow:'3px 3px 0 #102A43',marginLeft:'-5px',fontSize:'18px', backgroundColor:'#BCCCDC', fontWeight:'550'}}>{surplus}+</Avatar>}
    </AvatarGroup>
  );
}