import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Имитация загрузки контента с сервера
export const fetchPageContent = createAsyncThunk(
  'content/fetchPageContent',
  async (pageId) => {
    // В реальном проекте был бы API-запрос
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockContent = {
          home: {
            title: 'Главная',
            sections: []
          },
          loading: {
            title: 'Загрузка',
            sections: []
          },
          caching: {
            title: 'Кэширование',
            sections: []
          },
          server: {
            title: 'Сеть и сервер',
            sections: []
          },
          render: {
            title: 'Рендеринг',
            sections: []
          },
          delay: {
            title: 'Задержка',
            sections: []
          }
        }
        resolve(mockContent[pageId] || {})
      }, 300)
    })
  }
)

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    currentPage: {},
    loading: false,
    error: null
  },
  reducers: {
    setCurrentPageContent: (state, action) => {
      state.currentPage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageContent.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPageContent.fulfilled, (state, action) => {
        state.loading = false
        state.currentPage = action.payload
      })
      .addCase(fetchPageContent.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { setCurrentPageContent } = contentSlice.actions
export default contentSlice.reducer