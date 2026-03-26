        var num1 = ''
        var operador = ''
        function Inserir (valor){
            var visor = document.getElementById("visor")
            visor.value += valor
        }
        function definirOperador(op){
            var visor = document.getElementById("visor")
            num1 = visor.value /*  armazena o valor do primeiro numero */
            operador = op /*guarda a operação */
            visor.value = '' /*limpa o visor para o proximmo numero*/
        }
        function calcular(){
            var visor = document.getElementById('visor')
            var num2 = visor.value
            var result = 0
            if(operador === '+'){
                result = Number(num1) + Number(num2)
                visor.value = result
            }
            if(operador === '-'){
                result = Number(num1) - Number(num2)
                visor.value = result
            }
            if(operador === '*'){
                result = Number(num1) * Number(num2)
                visor.value = result
            }
            if(operador === '/'){
                result = Number(num1) / Number(num2)
                visor.value = result
            }

        }
        function Clear(){
            var visor = document.getElementById("visor")
            visor.value = ''
        }