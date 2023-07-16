export const params: {
  bankId: string;
  description: string;
  currencyCode: string;
  amount: number;
  identifier?: {
    email: string;
  };
  bankPaymentMethod: {
    creditorName: string;
    endToEndId: string;
    informationStructured?: {
      reference: string;
      referenceType: string;
    };
    creditorAccount: {
      iban: string;
    };
    debtorAccount: {
      iban: string;
    };
  };
} = {
  bankId: "SEB_LT",
  description: "Test payment",
  currencyCode: "EUR",
  amount: 12.34,
  identifier: {
    email: "jsmith@example.com",
  },
  bankPaymentMethod: {
    creditorName: "John Doe",
    endToEndId: "123",
    informationStructured: {
      reference: "00220055",
      referenceType: "SCOR",
    },
    creditorAccount: {
      iban: "LT00000000000000000",
    },
    debtorAccount: {
      iban: "LT00000000000000000",
    },
  },
};
