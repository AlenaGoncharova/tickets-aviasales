export default class DummyAviasalesService {
  data = [
    {
      price: 3000,
      carrier: 7,
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-10-12T12:06:00.000Z',
          stops: ['HKG', 'JNB'],
          duration: 1375,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-11-01T10:16:00.000Z',
          stops: ['HKG', 'JNB'],
          duration: 810,
        },
      ],
    },
    {
      price: 10000,
      carrier: 1,
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-10-12T12:06:00.000Z',
          stops: ['JNB'],
          duration: 1275,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-11-01T05:16:00.000Z',
          stops: ['JNB'],
          duration: 810,
        },
      ],
    },
    {
      price: 6500,
      carrier: 7,
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-10-12T12:06:00.000Z',
          stops: ['HKG', 'JNB', 'LON'],
          duration: 1275,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-11-01T10:16:00.000Z',
          stops: ['HKG'],
          duration: 810,
        },
      ],
    },
    {
      price: 3000,
      carrier: 9,
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-10-12T12:06:00.000Z',
          stops: ['HKG', 'JNB'],
          duration: 1275,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-11-01T10:19:00.000Z',
          stops: ['HKG'],
          duration: 810,
        },
      ],
    },
    {
      price: 4000,
      carrier: 7,
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-10-12T12:06:00.000Z',
          stops: ['HKG', 'JNB', 'LON'],
          duration: 1275,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-11-01T10:16:00.000Z',
          stops: ['HKG', 'JNB'],
          duration: 810,
        },
      ],
    },
  ];

  getAllTickets() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 800);
    });
  }
}
