import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { 
  fetchMenuItems, 
  setCurrentPage, 
  toggleMobileMenu,
  closeMobileMenu 
} from '../store/slices/navigationSlice'

export const useNavigation = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  
  const { menuItems, isMobileMenuOpen, loading, error } = useSelector(state => state.navigation)

  useEffect(() => {
    dispatch(fetchMenuItems())
  }, [dispatch])

  useEffect(() => {
    dispatch(setCurrentPage(location.pathname))
  }, [location.pathname, dispatch])

  const handlePageChange = () => {
    if (isMobileMenuOpen) {
      dispatch(closeMobileMenu())
    }
  }

  const handleMobileMenuToggle = () => {
    dispatch(toggleMobileMenu())
  }

  return {
    menuItems,
    currentPage: location.pathname,
    isMobileMenuOpen,
    loading,
    error,
    handlePageChange,
    handleMobileMenuToggle
  }
}