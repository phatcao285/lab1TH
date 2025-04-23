import { StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useState } from "react";

const Calculator = () => {
  // Dark Mode state
  const [darkMode, setDarkMode] = useState(false);
  
  // Định nghĩa màu cho các thành phần theo chế độ (dark/light)
  const bgColorFunction = (darkMode) ? "#414853" : "#ededed";
  const bgColorNumber = (darkMode) ? "#303946" : "#fff";
  const bgColorResult = (darkMode) ? "#282f36" : "#f5f5f5";
  const bgColorThemeButton = (darkMode) ? "#7b8084" : "#e5e5e5";
  const textColorHistory = (darkMode) ? "#B5B7BB" : "#7c7c7c";
  const colorIcon = (darkMode) ? "white" : "black";

  // Định nghĩa các nút
  const buttonsLeft = [
    ["C", "DEL"],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, "."]
  ];

  const buttonsRight = [
    "/", "*", "-", "+", "="
  ];

  // States để lưu giá trị và lịch sử
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  // Hàm tính toán
  const calculator = () => {
    let lastChar = currentNumber[currentNumber.length-1];
    if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === ".") {
      setCurrentNumber(currentNumber);
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
    }
  };

  // Xử lý nhập liệu
  const handleInput = (buttonPress) => {
    switch (buttonPress) {
      case "+": case "-": case "*": case "/":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
      case "DEL":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length-1)));
        break;
      case "C":
        Vibration.vibrate(35);
        setCurrentNumber("");
        setLastNumber("");
        break;
      case "=":
        Vibration.vibrate(35);
        setLastNumber(currentNumber+"=");
        calculator();
        break;
      default: // Các nút số (0-9) và dấu chấm
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
    }
  };

  // Render UI
  return (
    <View style={styles.container}>
      {/* Phần hiển thị kết quả */}
      <View style={{...styles.containerResult, backgroundColor: bgColorResult }}>
        <TouchableOpacity
          style={{...styles.themeButton, backgroundColor: bgColorThemeButton}}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Entypo name={(darkMode) ? "light-up" : "moon"} size={40} style={{color: colorIcon}} />
        </TouchableOpacity>
        <Text style={{...styles.historyText, color: textColorHistory}}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      {/* Phần nút bên trái */}
      <View style={styles.containerButton}>
        <View style={styles.containerButtonLeft}>
          {
            buttonsLeft.map((row, index) => 
              <View key={index} style={{...styles.containerRow, backgroundColor: (index===0) ? bgColorFunction : bgColorNumber }}>
                {
                  row.map(item => 
                    <TouchableOpacity key={item} style={styles.button} onPress={() => handleInput(item)}>
                      <Text style={styles.buttonText}> {item} </Text>
                    </TouchableOpacity>
                  )
                }
              </View>
            )
          }
        </View>

        {/* Phần nút bên phải */}
        <View style={styles.containerButtonRight}>
          {
            buttonsRight.map((item) =>
              <TouchableOpacity key={item} style={styles.button} onPress={() => handleInput(item)}>
                <Text style={{...styles.buttonText, color:"#fff"}}> {item} </Text>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerResult: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  containerButtonLeft: {
    flex: 3,
  },
  containerButtonRight: {
    flex: 1,
    backgroundColor:"#00b9d6",
  },
  containerButton: {
    flex: 2,
    flexDirection: "row",
  },
  themeButton: {
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 90,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start"
  },
  historyText: {
    fontSize: 20,
    marginRight: 10,
  },
  resultText: {
    color: "#00b9d6",
    fontSize: 35,
    margin: 15
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  containerRow: {
    flex: 1,
    flexDirection: "row"
  }
});

export default Calculator;