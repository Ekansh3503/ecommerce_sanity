import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1Q9kIfSB3NXCjICURtenzSc0' },
          // { shipping_rate: 'shr_1Q9SsGSB3NXCjICUwvyh0JTM' },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/bbg7bovf/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'usd',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const params = {
//         submit_type: 'pay',
//         mode: 'payment',
//         payment_method_types: ['card'],
//         billing_address_collection: 'auto',
//         shipping_options: [
//           { shipping_rate: 'shr_1Q9SqdSB3NXCjICUQCUuvMRm' },
//           { shipping_rate: 'shr_1Q9SsGSB3NXCjICUwvyh0JTM' },
//         ],
//         // customer: {
//         //   name: req.body.name,
//         //   address: {
//         //     line1: req.body.shippingAddress.line1,
//         //     line2: req.body.shippingAddress.line2,
//         //     city: req.body.shippingAddress.city,
//         //     state: req.body.shippingAddress.state,
//         //     country: req.body.shippingAddress.country,
//         //     postal_code: req.body.shippingAddress.postalCode,
//         //   },
//         // },
//         line_items: req.body.items.map((item) => {
//           const img = item.image[0].asset._ref;
//           const newImage = img.replace('image-', 'https://cdn.sanity.io/images/bbg7bovf/production/').replace('-webp', '.webp');

//           return {
//             price_data: {
//               currency: 'inr',
//               product_data: {
//                 name: item.name,
//                 images: [newImage],
//               },
//               unit_amount: item.price * 100,
//             },
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1,
//             },
//             quantity: item.quantity
//           }
//         }),
//         success_url: `${req.headers.origin}/success`,
//         cancel_url: `${req.headers.origin}/canceled`,
//       };

//       // Create Checkout Session from body params.
//       const session = await stripe.checkout.sessions.create(params);

//       res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }
