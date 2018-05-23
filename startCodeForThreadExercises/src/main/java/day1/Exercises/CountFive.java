/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package day1.Exercises;

/**
 *
 * @author Zakaria
 */
public class CountFive implements Runnable {

    public void run() {
        // Prints the numbers from 1...5 pauses 2 seconds after each print
        for (int i = 1; i <= 5; i++) {
            
            try {
                
                Thread.sleep(2000);
                System.out.println(i);
                
            } catch (InterruptedException ex) {
                System.out.println("Interruption Exception");
            
            }

        }
    }
}
