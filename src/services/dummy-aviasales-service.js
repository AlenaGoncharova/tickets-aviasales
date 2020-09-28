export default class DummyAviasalesService {
  data = [
    {
      price: 3000,
      carrier: 7,
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: new Date(2020, 8, 26, 10, 45),
          stops: ['HKG', 'JNB'],
          duration: 1275,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: new Date(2020, 8, 28, 11, 20),
          stops: ['HKG'],
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
          date: new Date(2020, 8, 26, 10, 45),
          stops: ['HKG', 'JNB'],
          duration: 1275,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: new Date(2020, 8, 28, 11, 20),
          stops: ['HKG'],
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
          date: new Date(2020, 8, 26, 10, 45),
          stops: ['HKG', 'JNB'],
          duration: 1275,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: new Date(2020, 8, 28, 11, 20),
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
          date: new Date(2020, 8, 26, 10, 45),
          stops: ['HKG', 'JNB'],
          duration: 1275,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: new Date(2020, 8, 28, 11, 20),
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
          date: new Date(2020, 8, 26, 10, 45),
          stops: ['HKG', 'JNB'],
          duration: 1275,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: new Date(2020, 8, 28, 11, 20),
          stops: ['HKG'],
          duration: 810,
        },
      ],
    },
  ];

  getAllTickets() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 800);
    });
  }
}
