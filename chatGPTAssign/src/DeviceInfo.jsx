export function DeviceInfo() {
  const [deviceData, setDeviceData] = useState({
    userAgent: '',
    platform: '',
    language: '',
    online: false,
  });

  useEffect(() => {
    const getDeviceData = () => {
      setDeviceData({
        userAgent: window.navigator.userAgent,      // Browser user agent string
        platform: window.navigator.platform,        // Device platform (e.g., 'Win32', 'MacIntel')
        language: window.navigator.language,        // Browser language setting (e.g., 'en-US')
        online: window.navigator.onLine,            // Boolean indicating if the browser is online
      });
    };

    getDeviceData();

    // Optionally, listen for changes in online/offline status
    window.addEventListener('online', getDeviceData);
    window.addEventListener('offline', getDeviceData);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('online', getDeviceData);
      window.removeEventListener('offline', getDeviceData);
    };
  }, []);

  return (
    <Box padding="4" maxWidth="400px" margin="auto">
      <Text fontSize="lg" fontWeight="bold">Device Information:</Text>
      <Text>User Agent: {deviceData.userAgent}</Text>
      <Text>Platform: {deviceData.platform}</Text>
      <Text>Language: {deviceData.language}</Text>
      <Text>Online: {deviceData.online ? 'Yes' : 'No'}</Text>
    </Box>
  );
}

// export default DeviceInfo;