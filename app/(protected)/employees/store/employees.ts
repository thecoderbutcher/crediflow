import { create } from "zustand";
import { User } from '@prisma/client';

type stateOrder = 'asc' | 'desc'

type UserState = {
  employeeId: string
  setEmployeeId: (employeeId: string) => void

  employeeName: string
  setEmployeeName: (employeeName: string) => void

  employees: User[]
  setEmployees: (customers: User[]) => void

  filterText: string
  setFilterText: (filterText: string) => void

  orderName: stateOrder
  toggleOrderName: () => void

  employeesFiltered(): User[]
}

export const useEmployeesStore = create<UserState>((set, get) => ({
  employeeId: '',
  setEmployeeId: (employeeId) => set({ employeeId }),

  employeeName: '',
  setEmployeeName: (employeeName) => set({ employeeName }),

  employees: [],
  setEmployees: (employees) => set({ employees }),

  filterText: '',
  setFilterText: (filterText) => set({ filterText }),

  orderName: 'asc',
  toggleOrderName: () => set((state) => ({ orderName: state.orderName === 'asc' ? 'desc' : 'asc' })),


  employeesFiltered() {
    const {
      employees,
      filterText,
      orderName
    } = get();

    // Filter by text
    let filtered = employees.filter(employee => (`${employee.firstName} ${employee.firstName}`).toLowerCase().includes(filterText.toLowerCase()));

    // Order
    if (orderName !== null){
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
