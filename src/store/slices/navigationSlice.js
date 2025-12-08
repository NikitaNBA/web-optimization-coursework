import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Асинхронный экшен для загрузки меню
export const fetchMenuItems = createAsyncThunk(
  'navigation/fetchMenuItems',
  async () => {
    try {
      const response = await fetch('/data/config.xml')
      const xmlText = await response.text()
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
      
      return Array.from(xmlDoc.querySelectorAll('item')).map(item => ({
        href: item.getAttribute('href').replace('.html', ''),
        text: item.textContent
      }))
    } catch (error) {
      // Fallback если XML не загрузился
      return [
        { href: '/', text: 'Главная' },
        { href: '/loading', text: 'Загрузка' },
        { href: '/caching', text: 'Кэширование' },
        { href: '/server', text: 'Сеть и сервер' },
        { href: '/render', text: 'Рендеринг' },
        { href: '/delay', text: 'Задержка' }
      ]
    }
  }
)

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentPage: '/',
    menuItems: [],
    isMobileMenuOpen: false,
    loading: false,
    error: null
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.loading = false
        state.menuItems = action.payload
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { setCurrentPage, toggleMobileMenu, closeMobileMenu } = navigationSlice.actions
export default navigationSlice.reducer