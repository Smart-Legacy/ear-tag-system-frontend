# MedaFarm

MedaFarm is a mobile application designed to assist small-scale farmers in managing livestock efficiently. The app provides functionalities to add, track, and monitor different animals such as cattle, sheep, and goats. It allows users to keep records on animal weight, height, and medications, and view historical data for better decision-making. MedaFarm simplifies livestock management with user-friendly features and generates unique IDs for each animal added to the system.

## Features

- **Animal Management**: Add and manage livestock (goat, sheep, cattle), and track essential data such as sex, weight, height, and medication history.
- **Date Picker**: A calendar-based popup for easy selection of dates for animal-related events.
- **Unique ID Generation**: Automatically generates unique IDs for each animal added to the system.
- **Animal History**: Displays events like weight updates and medication history.
- **Dynamic Pages**: Each animal has its own detailed page displaying relevant data.

## Tech Stack

- **Frontend**:
  - [React Native](https://reactnative.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Expo](https://expo.dev/)
  - [Tailwind CSS](https://tailwindcss.com/) for React Native
- **Icons**: [Ionicons](https://ionic.io/ionicons)
- **Date Picker**: [@react-native-community/datetimepicker](https://github.com/react-native-datetimepicker/datetimepicker)
- **Form Management**: React Hooks (`useState`) for managing form inputs and data.

## Installation

To run MedaFarm locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/medafarm.git
   cd medafarm
   ```

2. **Install dependencies**:
   Make sure you have Node.js and Expo CLI installed. Then, run:

   ```bash
   npm install
   ```

3. **Run the development server**:
   Use Expo CLI to run the app on a mobile simulator or physical device:

   ```bash
   expo start
   ```

   You can scan the QR code with your phone or run the app on an Android/iOS emulator.

## Build and Deployment

To generate an APK or AAB file for Android, you can use the following command:

```bash
eas build --platform android
```

This will generate an `.aab` (Android App Bundle) or `.apk` (Android Package) that can be installed or uploaded to Google Play Store. Make sure you have a Java environment set up correctly for building the app. If you encounter issues such as `java not recognized`, ensure Java is installed and the `JAVA_HOME` environment variable is set.

For more details on generating build files and publishing, refer to the [Expo Build Documentation](https://docs.expo.dev/build/).

## Contributing

We welcome contributions to MedaFarm. If you're interested in improving the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes and push them to your forked repository:
   ```bash
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```
4. Open a pull request, explaining your changes in detail.

### Code of Conduct

Please adhere to the project's [Code of Conduct](https://github.com/your-username/medafarm/CODE_OF_CONDUCT.md) when contributing.

### Issues

If you encounter any bugs or have feature requests, please submit an issue through the [Issues](https://github.com/your-username/medafarm/issues) tab on GitHub.

## License

MedaFarm is released under the MIT License. See the [LICENSE](https://github.com/your-username/medafarm/LICENSE) file for more details.

---

Thank you for checking out MedaFarm! We hope it helps you manage your livestock more efficiently. Happy farming!
