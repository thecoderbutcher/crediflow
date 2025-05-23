import { create } from "zustand";
import { Customer } from '@prisma/client';

type stateOrder = 'asc' | 'desc'

type CustomerState = {
  customerId: string
  setCustomerId: (customerId: string) => void

  customerName: string
  setCustomerName: (customerName: string) => void

  customers: Customer[]
  setCustomers: (customers: Customer[]) => void

  filterText: string
  setFilterText: (filterText: string) => void

  orderName: stateOrder
  toggleOrderName: () => void

  orderPay: stateOrder | null
  toggleOrderPay: () => void

  customersFiltered(): Customer[]
}

export const useCustomersStore = create<CustomerState>((set, get) => ({
  customerId: '',
  setCustomerId: (customerId) => set({ customerId }),

  customerName: '',
  setCustomerName: (customerName) => set({ customerName }),

  customers: [],
  setCustomers: (customers) => set({ customers }),

  filterText: '',
  setFilterText: (filterText) => set({ filterText }),

  orderName: 'asc',
  toggleOrderName: () => set((state) => ({ orderName: state.orderName === 'asc' ? 'desc' : 'asc' })),

  orderPay: null,
  toggleOrderPay: () => set((state) => ({ orderPay: state.orderPay === 'asc' ? 'desc' : 'asc', orderName: 'desc' })),

  customersFiltered() {
    const {
      customers,
      filterText,
      orderName,
      orderPay
    } = get();

    // Filter by text
    let filtered = customers.filter(customer => (`${customer.firstName} ${customer.lastName}`).toLowerCase().includes(filterText.toLowerCase()));

    // Order
    if (orderPay !== null) {
      filtered = filtered.sort((a, b) => {
        if (orderPay === 'asc') return Number(a.statusPay) - Number(b.statusPay)
        return Number(b.statusPay) - Number(a.statusPay)
      })
    }
    else {
      filtered = filtered.sort((a, b) => {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase()
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase()

        if (orderName === 'asc') return nameA.localeCompare(nameB)
        else return nameB.localeCompare(nameA)
      })
    }
    return filtered
  },
}))
