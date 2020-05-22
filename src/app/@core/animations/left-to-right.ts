import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence
} from '@angular/animations';

export const letfToRight = trigger('letfToRight', [
  transition('* <=> *', [
    // Initial state of new route
    query(
      ':enter',
      style({
        position: 'fixed',
        width: '100%',
        transform: 'translateX(-100%)'
      }),
      { optional: true }
    ),

    // move page off screen right on leave
    query(
      ':leave',
      animate(
        '500ms ease',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(100%)'
        })
      ),
      { optional: true }
    ),

    // move page in screen from left to right
    query(
      ':enter',
      animate(
        '500ms ease',
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        })
      ),
      { optional: true }
    )
  ])
]);
