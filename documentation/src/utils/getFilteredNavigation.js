const getFilteredNavigation = ({ NAVIGATION_MAPPING = [], searchValue = '' }) => (
  NAVIGATION_MAPPING.reduce((filtered, section) => {
    if (section.type === 'top') {
      filtered.push(section);
      return filtered;
    }

    const filteredSectionItems = section.items.filter(
      (item) => item.label.toLowerCase().includes(searchValue.toLowerCase()),
    );

    if (filteredSectionItems.length > 0) {
      filtered.push({
        ...section,
        items: filteredSectionItems,
      });
    }

    return filtered;
  }, [])
);

export default getFilteredNavigation;
